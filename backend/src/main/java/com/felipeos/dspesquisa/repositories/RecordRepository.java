package com.felipeos.dspesquisa.repositories;

import com.felipeos.dspesquisa.entities.Record;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RecordRepository extends JpaRepository<Record, Long> {
    
}
