package io.github.tiarleinoeremberg.imageliteapi.infra.repository;

import io.github.tiarleinoeremberg.imageliteapi.domain.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository <Image, String> {
}
