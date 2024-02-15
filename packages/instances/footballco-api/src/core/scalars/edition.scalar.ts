import { BadRequestException, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import { EditionsConfig } from '../../config/editions/types';
import { Portals } from '../enums/portals';

@Scalar('EditionScalar', () => EditionScalar)
export class EditionScalar implements CustomScalar<string, string> {
  constructor(@Inject(ConfigService) private readonly config: ConfigService) {}
  description = 'Edition custom scalar type';

  parseValue(value: string): string {
    const editions = Object.keys(
      this.config.get<EditionsConfig<Portals>>('edition'),
    );

    if (!editions.includes(value)) {
      throw new BadRequestException(`${value} is not one of valid editions`);
    }

    return value;
  }

  serialize(value: string): string {
    return value;
  }

  parseLiteral(ast: ValueNode): string {
    if (ast.kind === Kind.STRING) {
      return this.parseValue(ast.value);
    }

    return null;
  }
}
