import React, { FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';

import { Form, Input } from 'shared/ui';
import { RouteName } from 'shared/config';
import { useDebounce } from 'shared/lib';

import { SuggestionsList } from './suggestions-list';

import './styles.css';

export function SearchForm() {
	const [query, setQuery] = useState<string>('');
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const debouncedQuery = useDebounce(query, 500);
	const navigate = useNavigate();

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
		if (e.target.value && e.target.value.length >= 2) {
			setQuery(e.target.value);
		} else {
			setQuery('');
		}
	}, []);

	const handleFocus = useCallback((): void => {
		setIsOpen(true);
	}, []);

	const handleBlur = useCallback((): void => {
		setTimeout(() => setIsOpen(false), 300);
	}, []);

	const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (query.length !== 0) {
			setIsOpen(false);
			navigate(RouteName.SEARCH_PAGE + '?query=' + query);
		}
	}, [navigate, query]);

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Input placeholder='Enter a search query'
					   onChange={handleChange}
					   onFocus={handleFocus}
					   onBlur={handleBlur}
				/>
				<button className='search-form__icon'>
					<IoSearch size={20} />
				</button>
			</Form>
			{debouncedQuery && isOpen &&
				<SuggestionsList query={debouncedQuery} />
			}
		</>
	);
}