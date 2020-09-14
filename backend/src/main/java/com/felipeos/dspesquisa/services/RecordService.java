package com.felipeos.dspesquisa.services;

import java.time.Instant;

import com.felipeos.dspesquisa.dto.RecordDTO;
import com.felipeos.dspesquisa.dto.RecordInsertDTO;
import com.felipeos.dspesquisa.entities.Game;
import com.felipeos.dspesquisa.entities.Record;
import com.felipeos.dspesquisa.repositories.GameRepository;
import com.felipeos.dspesquisa.repositories.RecordRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RecordService {
    @Autowired
    private RecordRepository repository;

    @Autowired
    private GameRepository gameRepository;

    @Transactional
    public RecordDTO insert(RecordInsertDTO dto) {
        Record entity = new Record();
        entity.setName(dto.getName());
        entity.setAge(dto.getAge());
        entity.setMoment(Instant.now());
        Game game = gameRepository.getOne(dto.getGameId());
        entity.setGame(game);
        entity = repository.save(entity);
        return new RecordDTO(entity);
    }
}
