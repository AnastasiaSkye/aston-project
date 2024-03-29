import {
	Hardiness,
	PlantDetailsResponse,
	PlantDetailsType,
	PlantResponse,
	PlantsResponse,
	PlantType
} from 'shared/config';

export const getPlantShortInfo = (plant: PlantType): string[] =>
	[
		('Cycle: ' + plant.cycle),
		('Sunlight: ' + plant.sunlight),
		('Watering: ' + plant.watering)
	];

export const getPlantInfo = (plant: PlantDetailsType): string[] =>
	[
		('Cycle: ' + plant.cycle),
		('Sunlight: ' + plant.sunlight),
		('Watering: ' + plant.watering),
		('Propagation: ' + plant.propagation),
		('Hardiness Zone: ' + plant.hardinessZone),
		('Flowers: ' + plant.flowers),
		('Soil: ' + plant.soil),
		('Fruits: ' + plant.fruits),
		('Leaf: ' + plant.leaf),
		('Leaf Color: ' + plant.leafColor),
		('Growth Rate: ' + plant.growthRate),
		('Drought Tolerant: ' + plant.droughtTolerant),
		('Maintenance: ' + plant.maintenance),
		('Indoors: ' + plant.indoor),
		('Care Level: ' + plant.careLevel)
	];

const getMissingDataInArray = (array: string[]): string[] =>
	array.length === 0 ? ['Missing data'] : array;


const isAvailable = (plant: PlantResponse): boolean =>
	plant.default_image?.original_url !== 'https://perenual.com/storage/image/upgrade_access.jpg';


const getHardinessZone = (hardiness: Hardiness): string =>
	hardiness.min + ' - ' + hardiness.max;


const getString = (boolean: boolean): string =>
	boolean ? 'Yes' : 'No';

export const transformPlants = (res: PlantsResponse): PlantType[] =>
	res.data.filter(plant => isAvailable(plant)).map(plant => ({
		id: plant.id,
		name: plant.scientific_name[0],
		cycle: plant.cycle || 'Missing data',
		watering: plant.watering || 'Missing data',
		sunlight: getMissingDataInArray(plant.sunlight),
		image: plant.default_image?.original_url || ''
	}));


export const transformPlantDetails = (res: PlantDetailsResponse): PlantDetailsType =>
	({
		id: res.id,
		name: res.scientific_name[0],
		cycle: res.cycle || 'Missing data',
		propagation: getMissingDataInArray(res.propagation),
		hardinessZone: getHardinessZone(res.hardiness),
		watering: res.watering || 'Missing data',
		sunlight: getMissingDataInArray(res.sunlight),
		maintenance: res.maintenance || 'Missing data',
		soil: getMissingDataInArray(res.soil),
		growthRate: res.growth_rate || 'Missing data',
		droughtTolerant: getString(res.drought_tolerant),
		indoor: getString(res.indoor),
		careLevel: res.care_level || 'Missing data',
		flowers: res.flower_color || 'Missing data',
		fruits: res.harvest_season ? 'Ready In ' + res.harvest_season : 'Missing data',
		leaf: getString(res.leaf),
		leafColor: getMissingDataInArray(res.leaf_color),
		description: res.description || 'Missing data',
		image: res.default_image?.original_url || ''
	});

export const transformPlantDetailsToPlant = (res: PlantDetailsResponse): PlantType =>
	({
		id: res.id,
		name: res.scientific_name[0],
		cycle: res.cycle || 'Missing data',
		watering: res.watering || 'Missing data',
		sunlight: getMissingDataInArray(res.sunlight),
		image: res.default_image?.original_url || ''
	});

