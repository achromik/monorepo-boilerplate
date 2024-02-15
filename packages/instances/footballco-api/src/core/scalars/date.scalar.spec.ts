import { Kind, ValueNode } from 'graphql';
import { DateScalar } from './date.scalar';

describe('DateScalar', () => {
  let dateScalar: DateScalar;

  const GOOD_VALUES = ['2023-01-01', '2023-10-11'];

  const BAD_VALUES = [
    '2023-02-31',
    '',
    'wrong-date',
    '2023-01-01T00:00:00.000Z',
  ];

  beforeEach(async () => {
    dateScalar = new DateScalar();
  });

  it('should be defined', () => {
    expect(dateScalar).toBeDefined();
  });

  it.each(GOOD_VALUES.map((item) => [item]))(
    'should accept proper offset: "%s"',
    (value: string) => {
      expect(dateScalar.parseValue(value)).toBe(value);
      expect(dateScalar.serialize(value)).toBe(value);
    },
  );

  it.each(BAD_VALUES.map((item) => [item]))(
    'should throw on invalid offset "%s"',
    (value) => {
      expect(() => dateScalar.parseValue(value)).toThrow();
      expect(() => dateScalar.serialize(value)).toThrow();
    },
  );

  it('should return offset on a proper string AST type', () => {
    const ast: ValueNode = {
      kind: Kind.STRING,
      value: String(GOOD_VALUES[0]),
    };

    expect(dateScalar.parseLiteral(ast)).toBe(GOOD_VALUES[0]);
  });

  it('should return null on non-string AST type', () => {
    const ast: ValueNode = {
      kind: Kind.INT,
      value: '1',
    };

    expect(dateScalar.parseLiteral(ast)).toBe(null);
  });
});
