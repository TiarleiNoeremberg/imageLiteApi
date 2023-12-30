package io.github.tiarleinoeremberg.imageliteapi.application.images;

import io.github.tiarleinoeremberg.imageliteapi.domain.entity.Image;
import io.github.tiarleinoeremberg.imageliteapi.domain.enums.ImageExtension;
import io.github.tiarleinoeremberg.imageliteapi.domain.service.ImageService;
import io.github.tiarleinoeremberg.imageliteapi.infra.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {

    private final ImageRepository repository;
    @Override
    @Transactional  //necessario quando operacao de escrita
    public Image save(Image image) {
        return repository.save(image);
    }

    @Override
    //@Transactional NAO necessario pois nao e operacao de escrita
    public Optional<Image> getById(String id) {
        return repository.findById(id);
    }

    @Override
    public List<Image> search(ImageExtension extension, String query) {
        return repository.findByExtensionAndNameOrTagsLike(extension, query);
    }
}
