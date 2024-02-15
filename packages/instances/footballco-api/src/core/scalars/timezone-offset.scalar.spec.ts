import { Kind, ValueNode } from 'graphql';
import { TimezoneOffsetScalar } from './timezone-offset.scalar';

describe('TimezoneOffsetScalar', () => {
  let timezoneOffsetScalar: TimezoneOffsetScalar;

  const GOOD_VALUES = [-720, -30, -15, 0, 15, 30, 840];

  const BAD_VALUES = [-730, -5, 5, 855];

  beforeEach(async () => {
    timezoneOffsetScalar = new TimezoneOffsetScalar();
  });

  it('should be defined', () => {
    expect(timezoneOffsetScalar).toBeDefined();
  });

  it.each(GOOD_VALUES.map((item) => [item]))(
    'should accept proper offset: "%s"',
    (value: number) => {
      expect(timezoneOffsetScalar.parseValue(value)).toBe(value);
      expect(timezoneOffsetScalar.serialize(value)).toBe(value);
    },
  );

  it.each(BAD_VALUES.map((item) => [item]))(
    'should throw on invalid offset "%s"',
    (value) => {
      expect(() => timezoneOffsetScalar.parseValue(value)).toThrow();
      expect(() => timezoneOffsetScalar.serialize(value)).toThrow();
    },
  );

  it('should return offset on a proper string AST type', () => {
    const ast: ValueNode = {
      kind: Kind.INT,
      value: String(GOOD_VALUES[0]),
    };

    expect(timezoneOffsetScalar.parseLiteral(ast)).toBe(GOOD_VALUES[0]);
  });

  it('should return null on non-int AST type', () => {
    const ast: ValueNode = {
      kind: Kind.STRING,
      value: 'five',
    };

    expect(timezoneOffsetScalar.parseLiteral(ast)).toBe(null);
  });
});
