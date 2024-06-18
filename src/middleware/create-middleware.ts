import type {NextMiddleware, NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {isKeyDefined} from '@/lib/tools/is-key-defined';

function createEarlyReturnResponse() {
	// eslint-disable-next-line functional/prefer-readonly-type
	const earlyReturn: {value?: NextResponse} = {};

	// Extends `NextResponse` so that we know when one of its static methods is called
	class EarlyReturnResponse extends NextResponse {
		static override json<Body>(
			...params: Parameters<typeof NextResponse.json<Body>>
		) {
			return (earlyReturn.value = super.json(...params));
		}
		static override redirect(
			...params: Parameters<typeof NextResponse.redirect>
		) {
			return (earlyReturn.value = super.redirect(...params));
		}
		static override rewrite(
			...params: Parameters<typeof NextResponse.rewrite>
		) {
			return (earlyReturn.value = super.rewrite(...params));
		}
		static override next(...params: Parameters<typeof NextResponse.next>) {
			return (earlyReturn.value = super.next(...params));
		}
	}
	return {earlyReturn, EarlyReturnResponse};
}

export type Handler = (param: {
	readonly req: NextRequest;
	readonly res: NextResponse;
	readonly EarlyReturnResponse: ReturnType<
		typeof createEarlyReturnResponse
	>['EarlyReturnResponse'];
}) => void | Promise<void>;

export function createMiddleware() {
	const {earlyReturn, EarlyReturnResponse} = createEarlyReturnResponse();

	let handlers: readonly Handler[] = [];

	function use(handler: Handler) {
		handlers = [...handlers, handler];
	}
	async function middleware(
		req: NextRequest,
	): Promise<ReturnType<NextMiddleware>> {
		const res = new EarlyReturnResponse();

		for (const handler of handlers) {
			await handler({req, res, EarlyReturnResponse});

			if (isKeyDefined(earlyReturn, 'value')) {
				return earlyReturn.value;
			}
		}
		return res;
	}
	return {middleware, use};
}
