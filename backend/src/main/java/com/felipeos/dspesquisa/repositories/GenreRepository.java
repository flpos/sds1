package com.felipeos.dspesquisa.repositories;

import com.felipeos.dspesquisa.entities.Genre;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
