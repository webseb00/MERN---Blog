import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';

import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

class Pagination extends React.Component {

    state = {
		presentPage: this.props.presentPage || this.props.initalPage
	}

	changePage = (newPage) => {
		const { onPageChange  } = this.props;
		this.setState({ presentPage: newPage });
        onPageChange(newPage);
	}

    goToRight = (page) => {
        const { onPageChange } = this.props;
        const incrementPage = page + 1;
        this.setState({ presentPage: incrementPage });
        onPageChange(incrementPage);
    }

    goToLeft = (page) => {
        const { onPageChange } = this.props;
        const decrementPage = page - 1;
        this.setState({ presentPage: decrementPage });
        onPageChange(decrementPage);
    }

    render() {

        const { pages, pagination } = this.props;
        const { presentPage } = this.state;
        const { changePage, goToRight, goToLeft } = this;
        const leftIcon = presentPage >= 2 ? <FaAngleLeft className="pagination__list__item" onClick={() => goToLeft(presentPage) } /> : '';
        const rightIcon = presentPage !== pages ? <FaAngleRight className="pagination__list__item" onClick={() => goToRight(presentPage)} /> : '';

        if(pagination) {
         return (
            <div className="pagination">
                <ul className="pagination__list">
                    <li>{ leftIcon }</li>
                    {[...Array(pages)].map((el, page) => 
                        <li 
                            key={++page}
                            onClick={() => changePage(page) }
                            className={`pagination__list__item${((page) === presentPage) ? ' pagination__list__item--active' : ''}`}>
                            {page}
                        </li>
                    )}
                    <li>{ rightIcon }</li>
                </ul>
            </div>
            );
        } else {
            return '';
        }
    }

}

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    initialPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
    pagination: PropTypes.bool.isRequired
};

export default Pagination;