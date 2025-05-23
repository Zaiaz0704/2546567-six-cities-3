import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CurrentOfferType,
  OffersType,
  TLocationCoordinates,
  UserInfo,
} from '../../utils/type';
import { CITIES, CitiesEnum, RequestStatus } from '../../mocks/const';
import {
  changeFavoriteStatus,
  fetchAllOffers,
  fetchComments,
  fetchCurrentOffer,
  fetchFavorites,
  fetchNearbyOffers,
  sendComment,
} from '../middleware/cities-thunk';

const DEFAULT_CITY =
  CITIES.find((item) => item.name === CitiesEnum.Paris) || CITIES[0];

// тип городов
export type TCity = {
  name: CitiesEnum;
  location: TLocationCoordinates;
  offers: OffersType[];
};

export type ReviewType = {
  id: string;
  date: Date;
  user: UserInfo;
  comment: string;
  rating: number;
};

export type NewComment = {
  offerId: string;
  comment: string;
  rating: number;
};

//тип состояния
export interface CitiesState {
  currentCity: TCity;
  allOffers: OffersType[];
  selectedPoint: OffersType | null;
  status: RequestStatus;
  currentOffer: CurrentOfferType | null;
  nearbyOffers: OffersType[];
  comments: ReviewType[];
  favorites: OffersType[];
}

// изначальное состояние
export const INITIAL_CITIES_STATE: CitiesState = {
  currentCity: DEFAULT_CITY,
  allOffers: [],
  selectedPoint: null,
  status: RequestStatus.Idle,
  currentOffer: null,
  nearbyOffers: [],
  comments: [],
  favorites: [],
};

// хранилище
export const citiesSlice = createSlice({
  name: 'cities',
  initialState: INITIAL_CITIES_STATE,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<TCity>) => {
      const currentOffers = state.allOffers.filter(
        (item) => item.city.name === action.payload.name
      );
      state.currentCity = { ...action.payload, offers: currentOffers };
    },
    setSelectedPoint: (state, action: PayloadAction<OffersType | null>) => {
      state.selectedPoint = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.allOffers = action.payload;

        const currentOffers = action.payload.filter(
          (item: OffersType) => item.city.name === state.currentCity.name
        );
        state.currentCity = { ...state.currentCity, offers: currentOffers };
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })

      .addCase(fetchCurrentOffer.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchCurrentOffer.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;

        state.currentOffer = action.payload;
      })
      .addCase(fetchCurrentOffer.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })

      .addCase(fetchNearbyOffers.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;

        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })

      .addCase(fetchComments.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })

      .addCase(sendComment.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(sendComment.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.comments = [...state.comments, action.payload];
      })
      .addCase(sendComment.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })

      .addCase(changeFavoriteStatus.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(
        changeFavoriteStatus.fulfilled,
        (state, action: PayloadAction<OffersType>) => {
          state.status = RequestStatus.Success;
          const updatedOffer = action.payload;

          // Обновляем все места, где может находиться офер
          const updateFn = (item: OffersType) =>
            item.id === updatedOffer.id ? updatedOffer : item;

          state.currentCity.offers = state.currentCity.offers.map(updateFn);
          state.allOffers = state.allOffers.map(updateFn);
          state.nearbyOffers = state.nearbyOffers.map(updateFn);

          if (state.currentOffer?.id === updatedOffer.id) {
            state.currentOffer = {
              ...state.currentOffer,
              isFavorite: updatedOffer.isFavorite,
            };
          }
        }
      )
      .addCase(changeFavoriteStatus.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })

      .addCase(fetchFavorites.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(
        fetchFavorites.fulfilled,
        (state, action: PayloadAction<OffersType[]>) => {
          state.status = RequestStatus.Success;
          state.favorites = action.payload;
        }
      )
      .addCase(fetchFavorites.rejected, (state) => {
        state.status = RequestStatus.Failed;
      }),
});

export const { setCurrentCity, setSelectedPoint } = citiesSlice.actions;

export default citiesSlice.reducer;
