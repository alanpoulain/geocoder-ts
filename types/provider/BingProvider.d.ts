import { ExternalLoaderHeaders, ExternalLoaderInterface, ExternalLoaderParams } from "../ExternalLoader";
import { ErrorCallback, GeocodedResultsCallback, ProviderInterface, ProviderOptionsInterface } from "./";
import Geocoded from "../Geocoded";
import { GeocodeQuery, GeocodeQueryObject, ReverseQuery, ReverseQueryObject } from "../query";
import { Box } from "../types";
export interface BingResult {
    __type: string;
    bbox: Box;
    name: string;
    point: {
        type: string;
        coordinates: [number, number];
    };
    address: {
        addressLine: string;
        adminDistrict: string;
        adminDistrict2: string;
        countryRegion: string;
        formattedAddress: string;
        locality: string;
        postalCode: string;
    };
    confidence: string;
    entityType: string;
    geocodePoints: {
        type: string;
        coordinates: [number, number];
        calculationMethod: string;
        usageTypes: string[];
    }[];
    matchCodes: string[];
}
export default class BingProvider implements ProviderInterface {
    private externalLoader;
    private options;
    constructor(_externalLoader: ExternalLoaderInterface, options?: ProviderOptionsInterface);
    geocode(query: string | GeocodeQuery | GeocodeQueryObject, callback: GeocodedResultsCallback, errorCallback?: ErrorCallback): void;
    geodecode(latitudeOrQuery: number | string | ReverseQuery | ReverseQueryObject, longitudeOrCallback: number | string | GeocodedResultsCallback, callbackOrErrorCallback?: GeocodedResultsCallback | ErrorCallback, errorCallback?: ErrorCallback): void;
    executeRequest(params: ExternalLoaderParams, callback: GeocodedResultsCallback, headers?: ExternalLoaderHeaders, errorCallback?: ErrorCallback): void;
    static mapToGeocoded(result: BingResult): Geocoded;
}
//# sourceMappingURL=BingProvider.d.ts.map