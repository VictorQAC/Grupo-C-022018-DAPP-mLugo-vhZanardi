package application.Aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LogExecutionTimePointcut {

    static Logger logger = LoggerFactory.getLogger(LogExecutionTimePointcut.class);

    /// CUSTOM  POINTCUT////
    @Pointcut("execution(* application.controller.AuctionController.*(..))")
    public void methodsStarterServicePointcut() {
    }

    @Before("methodsStarterServicePointcut()")
    public void beforeMethods(JoinPoint jp) throws Throwable {
        String methodName = jp.getSignature().getName();
        logger.info("Executing method: " + methodName);
    }
}
