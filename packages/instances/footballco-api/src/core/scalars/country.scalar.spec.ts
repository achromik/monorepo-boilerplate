import { Kind, ValueNode } from 'graphql';

import { Countries } from '../enums/countries';
import { CountryScalar } from './country.scalar';

describe('CountryScalar', () => {
  let countryScalar: CountryScalar;

  const GOOD_COUNTRIES = ['GB', 'DE', 'FR', 'IT', 'JP'];

  const BAD_COUNTRIES = ['en', 'EN', 'gb', 'XY', 'XQ'];

  beforeEach(async () => {
    countryScalar = new CountryScalar();
  });

  it('should be defined', () => {
    expect(countryScalar).toBeDefined();
  });

  it.each(GOOD_COUNTRIES.map((item) => [item]))(
    'should accept proper country: "%s"',
    (country: string) => {
      expect(countryScalar.parseValue(country)).toBe(country);
    },
  );

  it.each(BAD_COUNTRIES.map((item) => [item]))(
    'should throw on invalid country "%s"',
    (country) => {
      expect(() => countryScalar.parseValue(country)).toThrow();
    },
  );

  it('should serialize correctly', () => {
    expect(countryScalar.serialize(Countries.GB)).toBe('GB');
  });

  it('should return country on a proper string AST type', () => {
    const ast: ValueNode = {
      kind: Kind.STRING,
      value: GOOD_COUNTRIES[0],
    };

    expect(countryScalar.parseLiteral(ast)).toBe(GOOD_COUNTRIES[0]);
  });

  it('should return null on non-string AST type', () => {
    const ast: ValueNode = {
      kind: Kind.INT,
      value: '1',
    };

    expect(countryScalar.parseLiteral(ast)).toBe(null);
  });
});
