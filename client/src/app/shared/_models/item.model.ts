import {ItemCustomerPriceModel} from 'src/app/shared/_models/item-customer-price.model';
import { InstructionModel } from 'src/app/shared/_models/instruction.model';
import { ItemInventoryModel } from 'src/app/shared/_models/item-inventory.model';

export class ItemModel {
  id: number;
  name: string;
  subItems: any[];
  itemCustomerPrice: ItemCustomerPriceModel[];
  instructions: InstructionModel[];
  extraItems: ItemModel[];
  code: string;
  description: string;
  customerPrices: any[];
  customerPrice: number;
  costPrice: number;
  costPriceWithVat: number;
  minChainAmount: number;
  maxChainAmount: number;
  minStoreAmount: number;
  maxStoreAmount: number;
  isWeighable: boolean;
  includesVat: boolean;
  isTaxed: boolean;
  isRenameEnabled: boolean;
  isAdditionalPercentage: boolean;
  isInventoryManager: boolean;
  allowPriceZero: boolean;
  isExtra: boolean;
  notDiscountable: boolean;
  isLockedForSale: boolean;
  requiresManager: boolean;
  categoryId: number;
  subCategoryId: number;
  supplier: number;
  supplierItemCode: string;
  costPriceDiscount: number;
  costInStore: number;
  unitsInStock: number;
  bonAdditionalText: string;
  availableFrom: string;
  availableTo: string;
  inventories: ItemInventoryModel[];
}
