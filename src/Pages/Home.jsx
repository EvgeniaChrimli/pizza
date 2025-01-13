import React from "react";
import axios from "axios";
//import QueryString from "qs";
//import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchContext } from "../App";
//import { list } from "../components/Sort";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination/Pagination";
import { setCategoryId, setPageCount } from "../redux/slices/filterSlice";

export const Home = () => {
  const dispatch = useDispatch();
  //const useSearchhh = useSearchParams();

  const categoryId = useSelector((state) => state.filterReducer.categoryId);
  const sort = useSelector((state) => state.filterReducer.sort.sortProperty);
  const pageCount = useSelector((state) => state.filterReducer.pageCount);

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  const onChangePage = (number) => {
    dispatch(setPageCount(number));
  };

  //React.useEffect(() => {
  // const queryString = QueryString.stringify({
  //   //ссылка с инф в поисковой строке
  //   sortProperty: sort.sortProperty,
  //   categoryId,
  //   pageCount,
  // });
  // useSearchhh(`?${queryString}`);
  //}, [categoryId, sort.sortProperty, pageCount]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  //React.useEffect(() => {
  //  if (window.location.search) {
  //    const params = QueryString.parse(window.location.search.substring(1)); // substring(1) убрать знак вопроса
  //
  //    const sort = list.find((obj) => obj.sortProperty === params.sortProperty);
  //    dispatch(
  //      setFilters({
  //        ...params,
  //        sort,
  //      })
  //    );
  //  }
  //}, []);

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    setIsLoading(true);
    try {
      axios
        .get(
          `https://65cca0f7dd519126b83f1fe1.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sort}&order=desc${search}`
        )
        .then((res) => {
          setItems(res.data);
        });

      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [categoryId, sort, searchValue, pageCount]);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onClickCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        <Pagination onChangePage={onChangePage} />
      </div>
    </>
  );
};
