import { BadRequestException } from '@nestjs/common';
import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import { Countries } from '../enums/countries';

const ALL_COUNTRIES = Object.keys(Countries);

@Scalar('CountryScalar', () => CountryScalar)
export class CountryScalar implements CustomScalar<string, Countries> {
  description = 'Country: valid ISO-3166-1 alpha-2 country string';

  parseValue(value: string): Countries {
    if (ALL_COUNTRIES.includes(value)) {
      return Countries[value];
    } else {
      throw new BadRequestException(
        `Country ${value} is not a valid ISO-3166-1 alpha 2 country`,
      );
    }
  }

  serialize(value: Countries): string {
    return value as string;
  }

  parseLiteral(ast: ValueNode): Countries {
    if (ast.kind === Kind.STRING) {
      return this.parseValue(ast.value);
    }

    return null;
  }
}
