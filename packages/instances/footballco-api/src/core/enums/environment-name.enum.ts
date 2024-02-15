import { registerEnumType } from '@nestjs/graphql';

export enum EnvironmentName {
  LIVE = 'LIVE',
  PREVIEW = 'PREVIEW',
}

// export const EnvironmentName = {
//   LIVE: 'LIVE',
//   PREVIEW: 'PREVIEW',
// } as const;

registerEnumType(EnvironmentName, {
  name: 'EnvironmentName',
  description: 'Environment name. Defaults to live',
});
