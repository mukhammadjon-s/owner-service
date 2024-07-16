import { Observable } from 'rxjs/internal/Observable';

export interface VariantControllerInterface {
  GetAll(data: any, metadata?: any): Observable<any>;
  GetOne(data: any, metadata?: any): Observable<any>;
  AddNew(data: any, metadata?: any): Observable<any>;
  Update(data: any, metadata?: any): Observable<any>;
  Delete(data: any, metadata?: any): Observable<any>;
  GetProductByVariantId(data: any, metadata?: any): Observable<any>;
  GetVariantGroupByProductId(data: any, metadata?: any): Observable<any>;
  GetOneVariant(data: any): Observable<any>;
  GetProductsByIds(data: any): Observable<any>;
  CalculateDeliveryPrice(data: any): Observable<any>;
  GetVariantGroupsByProductIds(data: any): Observable<any>;
  UpdateVariantGroupByCompany(data: any): Observable<any>;
}
