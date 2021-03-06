import { IPresentation } from '../helpers';
import { ObjectSchema, object, number, string } from 'yup';
import { ILedger as Common } from './commons';

export class Ledger implements IPresentation, Common {
  public validationSchema: ObjectSchema<any> = object().shape({
    name: string().required('The name of the ledger is required'),
    budgetID: number().required(
      'The identifier of the budgetting project is required'
    ),
    parentLedgerID: number().notRequired()
  });

  public constructor(
    public name: string,
    public budgetID: number,
    public parentLedgerID?: number
  ) {}
}
