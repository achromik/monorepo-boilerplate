import { BadRequestException } from '@nestjs/common';
import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('DateScalar', () => DateScalar)
export class DateScalar implements CustomScalar<string, string> {
  description = 'Date (YYYY-MM-DD format) custom scalar type';

  private static regex =
    /^[1-9][0-9]{3}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/;

  parseValue(value: string): string {
    if (!this.isValid(value)) {
      throw new BadRequestException(this.getErrorMessage(value));
    }

    return value;
  }

  serialize(value: string): string {
    if (!this.isValid(value)) {
      throw new Error(this.getErrorMessage(value));
    }

    return value;
  }

  parseLiteral(node: ValueNode): string {
    if (node.kind === Kind.STRING) {
      return this.parseValue(node.value);
    }

    return null;
  }

  private isValid(value: string): boolean {
    if (!DateScalar.regex.test(value)) {
      return false;
    }

    const dateStr = `${value}T00:00:00.000Z`;

    return dateStr === new Date(dateStr).toISOString();
  }

  private getErrorMessage(value: string): string {
    return `${value} must be valid date in YYYY-MM-DD format`;
  }
}
