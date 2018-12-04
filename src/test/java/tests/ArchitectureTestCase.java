package tests;

import com.tngtech.archunit.junit.AnalyzeClasses;
import com.tngtech.archunit.junit.ArchTest;
import com.tngtech.archunit.junit.ArchUnitRunner;
import com.tngtech.archunit.lang.ArchRule;
import org.junit.runner.RunWith;

import javax.persistence.EntityManager;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.classes;

@RunWith(ArchUnitRunner.class)
@AnalyzeClasses(packages = "application.controller")
public class ArchitectureTestCase {

    @ArchTest
    public static final ArchRule myRule = classes()
            .that().areAssignableTo(EntityManager.class)
            .should().onlyBeAccessed().byClassesThat().areAnnotatedWith("@Transactional");
}
