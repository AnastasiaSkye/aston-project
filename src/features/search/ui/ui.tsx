import React, { FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';

import { history } from 'entities/history';
import { Form, Input } from 'shared/ui';
import { RouteName } from 'shared/config';
import { useDebounce } from 'shared/lib';

import { SuggestionsList } from './suggestions-list';

import './styles.css';

interface Props {
	queryParam: string;
}

export function SearchForm({ queryParam }: Props) {
	const [query, setQuery] = useState<string>(queryParam);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const debouncedQuery = useDebounce(query, 500);
	const navigate = useNavigate();

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
		setQuery(e.target.value);
	}, []);

	const handleFocus = useCallback((): void => {
		setIsOpen(true);
	}, []);

	const handleBlur = useCallback((): void => {
		setTimeout(() => setIsOpen(false), 300);
	}, []);

	const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		if (query.length !== 0) {
			setIsOpen(false);
			await history.addSearchedHistory(query);
			navigate(RouteName.SEARCH_PAGE + '?query=' + query);
		}
	}, [navigate, query]);

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Input placeholder='Enter a search query'
					   value={query}
					   onChange={handleChange}
					   onFocus={handleFocus}
					   onBlur={handleBlur}
				/>
				<button className='search-form__icon'>
					<IoSearch size={20} />
				</button>
			</Form>
			{debouncedQuery && isOpen && debouncedQuery.length >= 2 &&
				<SuggestionsList query={debouncedQuery} />
			}
		</>
	);
}