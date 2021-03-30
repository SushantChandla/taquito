import * as M from '@taquito/michel-codec';
import { GenerateApiError } from './common';
import { parseContractStorage, parseContractParameter } from './contract-parser';
import { SchemaOutput, toSchema } from './schema-output';
import { TypescriptCodeOutput, toTypescriptCode } from './typescript-output';

export const generateContractTypesFromMichelsonCode = (contractScript: string, contractName: string, format: 'tz' | 'json'): {
    schema: SchemaOutput;
    typescriptCodeOutput: TypescriptCodeOutput;
    parsedContract: M.MichelsonContract;
} => {

    const p = new M.Parser();

    const contract = (format === 'tz' ? p.parseScript(contractScript) : JSON.parse(contractScript)) as M.MichelsonContract;
    if (!contract) {
        throw new GenerateApiError(`Could not parse contract script`, contractScript);
    }

    const contractStorage = contract.find(x => x.prim === `storage`) as undefined | M.MichelsonContractStorage;
    const contractParameter = contract.find(x => x.prim === `parameter`) as undefined | M.MichelsonContractParameter;

    const storageResult = contractStorage && parseContractStorage(contractStorage);
    const storage = storageResult ?? { storage: { kind: `object`, raw: { prim: `never` } as M.MichelsonType, fields: [] } };

    const parameterResult = contractParameter && parseContractParameter(contractParameter);
    const methods = parameterResult?.methods ?? [];
    const schemaOutput = toSchema(methods);

    const typescriptCode = toTypescriptCode(storage, methods, contractName, contract);

    return {
        schema: schemaOutput,
        typescriptCodeOutput: typescriptCode,
        parsedContract: contract,
    };
};