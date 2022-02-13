import React, { useState } from "react";
import classes from "./paginator.module.css";
import cn from "classnames";

export const Paginator = ({ totalUsersCount, pageSize, currentPage,
	onPageChanged, portionSize }) => {

	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	const portionCount = Math.ceil(pagesCount / portionSize);
	const [portionNumber, setPortionNumber] = useState(Math.ceil((currentPage)/portionSize));
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionSize * portionNumber;
	
	return (<div className={classes.paginator}>
		{portionNumber > 1 && <span>
			<button onClick={() => { setPortionNumber(1) 
			onPageChanged(pages[0])}}>Start</button>
			<button onClick={() => { setPortionNumber(portionNumber - 1) 
			onPageChanged(currentPage - portionSize)}}>Prev</button>
		</span>
		}
		{pages
			.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber )
			.map((p) => {
				return <span className={cn( { [classes.selectedPage]: currentPage === p }, 
				classes.pageNumber)}
					key={p}
					onClick={(e) => { onPageChanged(p) }}>{p}</span>
			})}
		{
			portionCount > portionNumber && 
			<span>
			<button onClick={() => { setPortionNumber(portionNumber + 1)
			onPageChanged(currentPage + portionSize)
			}}>Next</button>
			<button onClick={() => { setPortionNumber(portionCount) 
			onPageChanged(pages.length)}}>End</button>
		</span>
		}

	</div>
	)
};
export default Paginator;