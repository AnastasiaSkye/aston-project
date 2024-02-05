export interface PlantsResponse {
	data: PlantResponse[];
	to: number;
	per_page: number;
	current_page: number;
	from: number;
	last_page: number;
	total: number;
}

export interface PlantResponse {
	id: number;
	scientific_name: string[];
	cycle: string;
	watering: string;
	sunlight: string[];
	default_image: DefaultImage | null;
}

export interface PlantType {
	id: number;
	name: string;
	cycle: string;
	watering: string;
	sunlight: string[];
	image: string;
}

export interface PlantDetailsType {
	id: number;
	name: string;
	cycle: string;
	propagation: string[];
	hardinessZone: string;
	watering: string;
	sunlight: string[];
	maintenance: string;
	soil: string[];
	growthRate: string;
	droughtTolerant: string;
	indoor: string;
	careLevel: string;
	flowers: string;
	fruits: string;
	leaf: string;
	leafColor: string[];
	description: string;
	image: string;
}

export interface PlantDetailsResponse {
	id: number;
	common_name: string;
	scientific_name: string[];
	family: null | string;
	origin: string[];
	type: string;
	dimension: string;
	dimensions: Dimensions;
	cycle: string;
	attracts: any[];
	propagation: string[];
	hardiness: Hardiness;
	hardiness_location: HardinessLocation;
	watering: string;
	depth_water_requirement: any[] | WateringGeneralBenchmark;
	volume_water_requirement: any[];
	watering_period: null;
	watering_general_benchmark: WateringGeneralBenchmark;
	plant_anatomy: PlantAnatomy[];
	sunlight: string[];
	pruning_month: string[];
	pruning_count: any[];
	seeds: number;
	maintenance: null | string;
	'care-guides': string;
	soil: string[];
	growth_rate: string;
	drought_tolerant: boolean;
	salt_tolerant: boolean;
	thorny: boolean;
	invasive: boolean;
	tropical: boolean;
	indoor: boolean;
	care_level: null | string;
	pest_susceptibility: string[];
	pest_susceptibility_api: string;
	flowers: boolean;
	flowering_season: null | string;
	flower_color: string;
	cones: boolean;
	fruits: boolean;
	edible_fruit: boolean;
	edible_fruit_taste_profile: string;
	fruit_nutritional_value: string;
	fruit_color: string[];
	harvest_season: null | string;
	leaf: boolean;
	leaf_color: string[];
	edible_leaf: boolean;
	cuisine: boolean;
	medicinal: boolean;
	poisonous_to_humans: number;
	poisonous_to_pets: number;
	description: string;
	default_image: DefaultImage | null;
	other_images: string;
}

interface DefaultImage {
	license: number;
	license_name: string;
	license_url: string;
	original_url: string;
	regular_url: string;
	medium_url: string;
	small_url: string;
	thumbnail: string;
}

interface WateringGeneralBenchmark {
	unit: string;
	value: null | string;
}

interface Dimensions {
	type: string;
	min_value: number;
	max_value: number;
	unit: string;
}

export interface Hardiness {
	min: string;
	max: string;
}

interface HardinessLocation {
	full_url: string;
	full_iframe: string;
}

interface PlantAnatomy {
	part: string;
	color: string[];
}
