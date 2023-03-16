import styled from "styled-components";
import Range from "./Range";
import { baseStyle } from "../../../assets/styles/baseStyle";
import { data } from "../../../data/phonesExample";
import Select from "./Select";

const ListWrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;

`

const SortCharacteristicsList = () => {
    const ranges = data.sortSettings.ranges;
    const selectList = data.sortSettings.select;
    return (<ListWrapper>
        {ranges.map(range => <Range title={range.title} inputWidth={baseStyle.menu.toolbar.inputWidth} min={range.min} max={range.max} key={range.title}/>)}
        {selectList.map(select => <Select title={select.title} options={select.options} key={select.title}/>)}
    </ListWrapper>)
}  

export default SortCharacteristicsList;