import Geocoded, { GeocodedObject } from "../../Geocoded";
import AdminLevel from "../../AdminLevel";
export interface GoogleMapsGeocodedObject extends GeocodedObject {
    readonly placeId?: string;
    readonly partialMatch?: boolean;
    readonly resultType?: string[];
    readonly locationType?: string;
    readonly streetAddress?: string;
    readonly intersection?: string;
    readonly political?: string;
    readonly colloquialArea?: string;
    readonly ward?: string;
    readonly neighborhood?: string;
    readonly premise?: string;
    readonly subpremise?: string;
    readonly naturalFeature?: string;
    readonly airport?: string;
    readonly park?: string;
    readonly pointOfInterest?: string;
    readonly establishment?: string;
    readonly postalCodeSuffix?: string;
    readonly subLocalityLevels?: AdminLevel[];
}
export default class GoogleMapsGeocoded extends Geocoded {
    private readonly placeId?;
    private readonly partialMatch?;
    private readonly resultType?;
    private readonly locationType?;
    private readonly streetAddress?;
    private readonly intersection?;
    private readonly political?;
    private readonly colloquialArea?;
    private readonly ward?;
    private readonly neighborhood?;
    private readonly premise?;
    private readonly subpremise?;
    private readonly naturalFeature?;
    private readonly airport?;
    private readonly park?;
    private readonly pointOfInterest?;
    private readonly establishment?;
    private readonly postalCodeSuffix?;
    private readonly subLocalityLevels;
    protected constructor({ placeId, partialMatch, resultType, locationType, streetAddress, intersection, political, colloquialArea, ward, neighborhood, premise, subpremise, naturalFeature, airport, park, pointOfInterest, establishment, postalCodeSuffix, subLocalityLevels, ...geocodedObject }: GoogleMapsGeocodedObject);
    static create(object: GoogleMapsGeocodedObject): GoogleMapsGeocoded;
    toObject(): GoogleMapsGeocodedObject;
    withPlaceId(placeId: string): GoogleMapsGeocoded;
    getPlaceId(): undefined | string;
    withPartialMatch(partialMatch: boolean): GoogleMapsGeocoded;
    isPartialMatch(): undefined | boolean;
    withResultType(resultType: string[]): GoogleMapsGeocoded;
    getResultType(): undefined | string[];
    withLocationType(locationType: string): GoogleMapsGeocoded;
    getLocationType(): undefined | string;
    withStreetAddress(streetAddress: string): GoogleMapsGeocoded;
    getStreetAddress(): undefined | string;
    withIntersection(intersection: string): GoogleMapsGeocoded;
    getIntersection(): undefined | string;
    withPolitical(political: string): GoogleMapsGeocoded;
    getPolitical(): undefined | string;
    withColloquialArea(colloquialArea: string): GoogleMapsGeocoded;
    getColloquialArea(): undefined | string;
    withWard(ward: string): GoogleMapsGeocoded;
    getWard(): undefined | string;
    withNeighborhood(neighborhood: string): GoogleMapsGeocoded;
    getNeighborhood(): undefined | string;
    withPremise(premise: string): GoogleMapsGeocoded;
    getPremise(): undefined | string;
    withSubpremise(subpremise: string): GoogleMapsGeocoded;
    getSubpremise(): undefined | string;
    withNaturalFeature(naturalFeature: string): GoogleMapsGeocoded;
    getNaturalFeature(): undefined | string;
    withAirport(airport: string): GoogleMapsGeocoded;
    getAirport(): undefined | string;
    withPark(park: string): GoogleMapsGeocoded;
    getPark(): undefined | string;
    withPointOfInterest(pointOfInterest: string): GoogleMapsGeocoded;
    getPointOfInterest(): undefined | string;
    withEstablishment(establishment: string): GoogleMapsGeocoded;
    getEstablishment(): undefined | string;
    withPostalCodeSuffix(postalCodeSuffix: string): GoogleMapsGeocoded;
    getPostalCodeSuffix(): undefined | string;
    addSubLocalityLevel(subLocalityLevel: AdminLevel): void;
    getSubLocalityLevels(): AdminLevel[];
}
//# sourceMappingURL=GoogleMapsGeocoded.d.ts.map