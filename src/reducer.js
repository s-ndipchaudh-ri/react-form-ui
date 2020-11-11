import { actionType } from "./actionType";

export const initialState = {
  user: "sandip",
  address1: "",
  bedroom1: 1,
  bathroom1: 1,
  description1: "",
  featuredImg: "",
  imgs: [],
  imguploaded : true,
  limitexceed : false
};

const reducer = (state, action) => {
  
  switch (action.type) {
    case actionType.ADD_ADDRESS:
      return {
        ...state,
        address1: action.address1,
      };
    case actionType.ADD_BATHROOM:
      return {
        ...state,
        bathroom1: action.bathroom1,
      };
    case actionType.ADD_BEDROOM:
      return {
        ...state,
        bedroom1: action.bedroom1,
      };
    case actionType.ADD_DESCRIPTION:
      return {
        ...state,
        description1: action.description1,
      };
    case actionType.ADD_FEATURED_IMG:
      return {
        ...state,
        featuredImg: action.featuredImg,
      };
    case actionType.ADD_IMAGES:
      
      return {
        ...state,
        imgs : [...state.imgs, action.item]
      }
    case actionType.IMG_UPLOADED:
      return{
        ...state,
        imguploaded : !state.imguploaded
      }

      case actionType.LIMIT_EXCEED:
        return{
          ...state,
          limitexceed : true
        }
    default:
      return state;
  }
};

export default reducer;
