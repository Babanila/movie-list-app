import React, { FC } from 'react';
import { Button } from '../Button';
import './Pagination.css';

type PaginationType = {
    onSetPage: (page: number) => void;
    pageNumber: number;
    totalPage: number;
};

export const Pagination: FC<PaginationType> = ({
    onSetPage,
    pageNumber,
    totalPage,
}) => {
    return (
        <div>
            <Button
                className="primary"
                onClick={() => onSetPage(pageNumber - 1)}
                disabled={pageNumber === 1}
            >
                Previous
            </Button>
            <span className="page-number">
                {pageNumber} - {totalPage}
            </span>
            <Button
                className="primary"
                onClick={() => onSetPage(pageNumber + 1)}
                disabled={pageNumber >= totalPage}
            >
                Next
            </Button>
        </div>
    );
};
