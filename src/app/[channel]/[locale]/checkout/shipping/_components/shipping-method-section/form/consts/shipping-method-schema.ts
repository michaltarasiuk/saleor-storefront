import * as zod from 'zod';

import {FIELDS} from './fields';

export type ShippingMethodSchema = zod.infer<typeof shippingMethodSchema>;

export const shippingMethodSchema = zod.object({
	[FIELDS.DELIVERY_METHOD_ID]: zod.string(),
});
