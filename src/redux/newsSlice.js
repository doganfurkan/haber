import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("news/getData", async () => {
  const res = await axios(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  return res.data;
});

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    loading: false,
    news: {
      articles: [
        {
          author: "Yazar Adı",
          title:"Haber Başlığı",
          description:"Haber İçeriği",
          url:"#",
          urlToImage:"https://picsum.photos/600",
          publishedAt:"29/12/2023"
        },
      ],
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      });
  },
});

export default newsSlice.reducer;
