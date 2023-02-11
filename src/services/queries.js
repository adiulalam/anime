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
			}
		}
	}
`;
