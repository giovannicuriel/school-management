export interface IAPIReturn {
  statusCode: number,
  data: any,
}
export interface IHelpers {
  makeReturn: (statusCode: number, data: any) => IAPIReturn,
}
export interface IDependencies {
  application: IApplication,
  domain: IDomain,
  infrastructure: IInfrastructure,
  helpers: IHelpers,
}