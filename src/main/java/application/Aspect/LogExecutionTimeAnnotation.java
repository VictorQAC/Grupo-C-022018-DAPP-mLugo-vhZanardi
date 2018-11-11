package application.Aspect;

import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.ProceedingJoinPoint;

@Aspect
@Component
public class LogExecutionTimeAnnotation {

    static Logger logger = LoggerFactory.getLogger(LogExecutionTimeAnnotation.class);

    /// ANNOTATION POINTCUT////
    @Around("@annotation(LogExecutionTime)")
    public Object logExecutionTimeAnnotation(ProceedingJoinPoint joinPoint) throws Throwable {
        logger.info("/////// AROUND START  logExecutionTime annotation //////");
        long start = System.currentTimeMillis();
        Object proceed = joinPoint.proceed();
        long executionTime = System.currentTimeMillis() - start;
        logger.info("/////// " + joinPoint.getSignature() + " executed in " + executionTime + "ms");
        logger.info("/////// AROUND FINISH  logExecutionTime annotation ///////");
        return proceed;
    }

}
