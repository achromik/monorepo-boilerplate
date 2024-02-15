import { BadRequestException } from '@nestjs/common';
import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

const config = {
  min: -720,
  max: 840,
  step: 15,
};

@Scalar('TimezoneOffsetScalar', () => TimezoneOffsetScalar)
export class TimezoneOffsetScalar implements CustomScalar<number, number> {
  description = `Date timezone offset in minutes, can range from ${config.min} to ${config.max}, only multiples of ${config.step}.`;

  parseValue(value: number): number {
    if (!this.isValid(value)) {
      throw new BadRequestException(this.getErrorMessage(value));
    }

    return value;
  }

  serialize(value: number): number {
    if (!this.isValid(value)) {
      throw new Error(this.getErrorMessage(value));
    }

    return value;
  }

  parseLiteral(node: ValueNode): number {
    if (node.kind === Kind.INT) {
      return this.parseValue(parseInt(node.value, 10));
    }

    return null;
  }

  private isValid(value: number): boolean {
    if (!Number.isInteger(value)) {
      return false;
    }

    if (value < config.min || value > config.max) {
      return false;
    }

    if (value % config.step !== 0) {
      return false;
    }

    return true;
  }

  private getErrorMessage(value: number): string {
    return `${value} is not a valid Timezone offset`;
  }
}
