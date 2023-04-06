import { createUniqueFieldSchema } from '@ts-react/form';
import { z } from 'zod';

const dropdownSchema = (props: { required_error: string }) => createUniqueFieldSchema(
    z.string({ ...props }),
    "dropdown"
);

export { dropdownSchema };
