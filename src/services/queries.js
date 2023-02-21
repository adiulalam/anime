import { getCurrentSeason } from "@/utils/getCurrentSeason";
import { gql } from "@apollo/client";

export const getLandingPage = gql`
	query getLandingPage{
		trending: Page(page: 1, perPage: 20) {
			pageInfo {
				total
				perPage
				currentPage
				hasNextPage
			}
			media(type: ANIME, isAdult: false, sort: [TRENDING_DESC]) {
				id
				title {
					userPreferred
				}
				coverImage {
					large
					color
				}
				averageScore
				episodes
				genres
				format
				status
				seasonYear
				startDate {
					year
				}
				season
				nextAiringEpisode {
					id
					episode
					timeUntilAiring
				}
			}
		}
		popular: Page(page: 1, perPage: 20) {
			pageInfo {
				total
				perPage
				currentPage
				hasNextPage
			}
			media(type: ANIME, isAdult: false, sort: [POPULARITY_DESC]) {
				id
				title {
					userPreferred
				}
				coverImage {
					large
					color
				}
				averageScore
				episodes
				genres
				format
				status
				seasonYear
				startDate {
					year
				}
				season
				nextAiringEpisode {
					id
					episode
					timeUntilAiring
				}
			}
		}
		rating: Page(page: 1, perPage: 50) {
			pageInfo {
				total
				perPage
				currentPage
				hasNextPage
			}
			media(type: ANIME, isAdult: false, sort: [SCORE_DESC]) {
				id
				title {
					userPreferred
				}
				coverImage {
					large
					color
				}
				averageScore
				episodes
				genres
				format
				status
				seasonYear
				startDate {
					year
				}
				season
				nextAiringEpisode {
					id
					episode
					timeUntilAiring
				}
			}
		}
		favourite: Page(page: 1, perPage: 20) {
			pageInfo {
				total
				perPage
				currentPage
				hasNextPage
			}
			media(type: ANIME, isAdult: false, sort: [FAVOURITES_DESC]) {
				id
				title {
					userPreferred
				}
				coverImage {
					large
					color
				}
				averageScore
				episodes
				genres
				format
				status
				seasonYear
				startDate {
					year
				}
				season
				nextAiringEpisode {
					id
					episode
					timeUntilAiring
				}
			}
		}
		upcoming: Page(page: 1, perPage: 20) {
			pageInfo {
				total
				perPage
				currentPage
				hasNextPage
			}
			media(type: ANIME, isAdult: false, sort: [POPULARITY_DESC], status: NOT_YET_RELEASED) {
				id
				title {
					userPreferred
				}
				coverImage {
					large
					color
				}
				averageScore
				episodes
				genres
				format
				status
				seasonYear
				startDate {
					year
				}
				season
				nextAiringEpisode {
					id
					episode
					timeUntilAiring
				}
			}
		}
		year: Page(page: 1, perPage: 20) {
			pageInfo {
				total
				perPage
				currentPage
				hasNextPage
			}
			media(type: ANIME, isAdult: false, sort: [SCORE_DESC], seasonYear: ${new Date().getFullYear()}) {
				id
				title {
					userPreferred
				}
				coverImage {
					large
					color
				}
				averageScore
				episodes
				genres
				format
				status
				seasonYear
				startDate {
					year
				}
				season
				nextAiringEpisode {
					id
					episode
					timeUntilAiring
				}
			}
		}
		seasonal: Page(page: 1, perPage: 20) {
			pageInfo {
				total
				perPage
				currentPage
				hasNextPage
			}
			media(type: ANIME, isAdult: false, sort: [SCORE_DESC], seasonYear: ${new Date().getFullYear()}, season: ${getCurrentSeason()}) {
				id
				title {
					userPreferred
				}
				coverImage {
					large
					color
				}
				averageScore
				episodes
				genres
				format
				status
				seasonYear
				startDate {
					year
				}
				season
				nextAiringEpisode {
					id
					episode
					timeUntilAiring
				}
			}
		}
	}
`;

export const getFilterResults = gql`
	query getFiltersResult(
		$sort: [MediaSort]
		$search: String
		$format: MediaFormat
		$status: MediaStatus
		$genre_in: [String]
		$tag_in: [String]
		$startDate_greater: FuzzyDateInt
		$endDate_lesser: FuzzyDateInt
		$averageScore_greater: Int
		$averageScore_lesser: Int
	) {
		filter: Page(page: 1, perPage: 5) {
			pageInfo {
				perPage
				currentPage
			}
			media(
				type: ANIME
				isAdult: false
				sort: $sort
				search: $search
				format: $format
				status: $status
				genre_in: $genre_in
				tag_in: $tag_in
				startDate_greater: $startDate_greater
				endDate_lesser: $endDate_lesser
				averageScore_greater: $averageScore_greater
				averageScore_lesser: $averageScore_lesser
			) {
				id
				title {
					userPreferred
				}
				format
				averageScore
				episodes
				status
				seasonYear
				startDate {
					year
				}
			}
		}
	}
`;

export const getFilterCategoryResults = gql`
	query getFiltersResult(
		$page: Int
		$sort: [MediaSort]
		$search: String
		$format: MediaFormat
		$status: MediaStatus
		$genre_in: [String]
		$tag_in: [String]
		$startDate_greater: FuzzyDateInt
		$endDate_lesser: FuzzyDateInt
		$averageScore_greater: Int
		$averageScore_lesser: Int
	) {
		filter: Page(page: $page) {
			pageInfo {
				total
				perPage
				currentPage
				hasNextPage
			}
			media(
				type: ANIME
				isAdult: false
				sort: $sort
				search: $search
				format: $format
				status: $status
				genre_in: $genre_in
				tag_in: $tag_in
				startDate_greater: $startDate_greater
				endDate_lesser: $endDate_lesser
				averageScore_greater: $averageScore_greater
				averageScore_lesser: $averageScore_lesser
			) {
				id
				title {
					userPreferred
				}
				format
				averageScore
				episodes
				status
				seasonYear
				season
				duration
				description
				genres
				startDate {
					year
				}
				coverImage {
					large
					color
				}
				nextAiringEpisode {
					id
					episode
					timeUntilAiring
				}
				studios(isMain: true) {
					nodes {
						id
						name
					}
				}
			}
		}
	}
`;

export const getAnimePage = gql`
	query getAnimePage($id: Int!) {
		anime: Page(page: 1, perPage: 1) {
			pageInfo {
				total
				perPage
				currentPage
				hasNextPage
			}
			media(type: ANIME, isAdult: false, id: $id) {
				id
				title {
					romaji
					english
					native
					userPreferred
				}
				coverImage {
					large
					color
				}
				bannerImage
				description
				averageScore
				episodes
				genres
				format
				status
				seasonYear
				season
				duration
				source
				startDate {
					day
					month
					year
				}
				endDate {
					day
					month
					year
				}
				nextAiringEpisode {
					id
					episode
					timeUntilAiring
				}
				characters(sort: [ROLE, RELEVANCE, ID], role: MAIN) {
					edges {
						id
						role
						voiceActors(language: JAPANESE, sort: [RELEVANCE, ID]) {
							id
							name {
								userPreferred
							}
							language: languageV2
							image {
								large
							}
						}
						node {
							id
							name {
								userPreferred
							}
							image {
								large
							}
						}
					}
				}
			}
		}
	}
`;
