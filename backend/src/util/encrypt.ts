import { hash } from 'bcrypt';

const toHash = (value: string) => hash(value, 12);

export { toHash };
