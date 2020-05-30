import React from 'react';
import './Filters.scss';


const Filters = ({ filterAttr, onFilter, sortAttr, onSort, ...otherProps }) => {	
	return (
		<div className="container" data-testid="filters">
			<section className="filters">
				<div className="filters__search">
					<input type="text" className="filters__search__input" placeholder="Pesquisar" value={filterAttr} onChange={(event) => onFilter && onFilter(event.target.value)} />
	
					<button className="filters__search__icon">
					<i className="fa fa-search"/>
					</button>
				</div>
	
				<button className={`filters__item ${sortAttr == 'name' ? 'is-selected' : ''}`} onClick={() => onSort && onSort('name')}>
					Nome <i className="fas fa-sort-down" />
				</button>
	
				<button className={`filters__item ${sortAttr == 'country' ? 'is-selected' : ''}`} onClick={() => onSort && onSort('country')}>
					País <i className="fas fa-sort-down" />
				</button>
	
				<button className={`filters__item ${sortAttr == 'company' ? 'is-selected' : ''}`} onClick={() => onSort && onSort('company')}>
					Empresa <i className="fas fa-sort-down" />
				</button>
	
				<button className={`filters__item ${sortAttr == 'department' ? 'is-selected' : ''}`} onClick={() => onSort && onSort('department')}>
					Departamento <i className="fas fa-sort-down" />
				</button>
	
				<button className={`filters__item ${sortAttr == 'admissionDate' ? 'is-selected' : ''}`} onClick={() => onSort && onSort('admissionDate')}>
					Data de admissão <i className="fas fa-sort-down" />
				</button>
			</section>
		</div>
	);
}

export default Filters;
