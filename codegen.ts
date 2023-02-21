import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  documents: '**/*.gql',
  generates: {
    'graphql/generated.ts': {
      config: {
        scalars: {
          DateTime: 'string',
        },
        withHooks: true,
      },
      plugins: [
        'typescript',
        'typescript-operations',
        { 'typescript-react-apollo': { documentVariablePrefix: '_' } },
        'typed-document-node',
      ],
    },
  },
  schema: ['**/*.graphql'],
}

export default config
