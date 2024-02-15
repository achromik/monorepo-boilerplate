import { ConfigService } from '@nestjs/config';
import { Kind, ValueNode } from 'graphql';
import { EditionScalar } from './edition.scalar';

describe('EditionScalar', () => {
  let editionScalar: EditionScalar;

  const mockEditions = Object.fromEntries(
    ['en', 'ar', 'es'].map((item) => [item, item]),
  );

  const badEditions = ['aa', 'bb', 'cc'];

  beforeEach(async () => {
    editionScalar = new EditionScalar(
      new ConfigService({ edition: mockEditions }),
    );
  });

  it('should be defined', () => {
    expect(editionScalar).toBeDefined();
  });

  it.each(Object.keys(mockEditions).map((item) => [item]))(
    'should accept configured edition "%s"',
    (edition) => {
      expect(editionScalar.parseValue(edition)).toBe(edition);
    },
  );

  it.each(badEditions.map((item) => [item]))(
    'should throw on non-configured edition "%s"',
    (edition) => {
      expect(() => editionScalar.parseValue(edition)).toThrow();
    },
  );

  it('should not serialize', () => {
    expect(editionScalar.serialize('xx')).toBe('xx');
  });

  it('should parse only String AST literals', () => {
    const edition = Object.keys(mockEditions)[0];
    const ast: ValueNode = {
      kind: Kind.STRING,
      value: edition,
    };

    expect(editionScalar.parseLiteral(ast)).toBe(edition);
  });

  it('should null on non-String AST literals', () => {
    const edition = Object.keys(mockEditions)[0];
    const ast: ValueNode = {
      kind: Kind.INT,
      value: edition,
    };

    expect(editionScalar.parseLiteral(ast)).toBe(null);
  });
});
