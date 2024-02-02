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

const getInfoFromArray = (info: string | string[]): string | string[] => {
	if (info.includes('Upgrade Plans To Premium')) {
		return ['Missing data'];
	} else if (Array.isArray(info)) {
		return getMissingDataInArray(info);
	} else {
		return info || 'Missing data';
	}
};

const getInfo = (info: string): string => {
	if (info.includes('Upgrade Plans To Premium')) {
		return 'Missing data';
	} else {
		return info || 'Missing data';
	}
};

const getImage = (plant: PlantResponse): string => {
	if (plant.default_image?.original_url === 'https://perenual.com/storage/image/upgrade_access.jpg') {
		return '';
	} else {
		return plant.default_image?.original_url || '';
	}
};

const getHardinessZone = (hardiness: Hardiness): string =>
	hardiness.min + ' - ' + hardiness.max;


const getString = (boolean: boolean): string =>
	boolean ? 'Yes' : 'No';

export const transformPlants = (res: PlantsResponse): PlantType[] =>
	res.data.map(plant => ({
		id: plant.id,
		name: plant.scientific_name[0],
		cycle: getInfo(plant.cycle),
		watering: getInfo(plant.watering),
		sunlight: getInfoFromArray(plant.sunlight),
		image: getImage(plant)
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
		image: getImage(res)
	});

export const transformPlantDetailsToPlant = (res: PlantDetailsResponse): PlantType =>
	({
		id: res.id,
		name: res.scientific_name[0],
		cycle: res.cycle || 'Missing data',
		watering: res.watering || 'Missing data',
		sunlight: getMissingDataInArray(res.sunlight),
		image: getImage(res)
	});

