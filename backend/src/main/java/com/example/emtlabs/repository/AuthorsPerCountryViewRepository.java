package com.example.emtlabs.repository;

import com.example.emtlabs.model.views.AuthorsPerCountryView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AuthorsPerCountryViewRepository extends JpaRepository<AuthorsPerCountryView, String> {
}
