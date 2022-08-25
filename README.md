# BBRRP : Blockchain Based Restaurant Reservation Platform

## Deployment

Our architecutre:
- Elastic Beanstalk <- 서버 구동 및 관리 (Load Balancing, ...)
  - 환경 변수 설정에 유의
- S3 <- 스토리지 서버 및 배포 빌드 파일 serve (by EB)
- RDS <- PostgreSQL database
  - 보안정책 설정에 유의
- Code Pipeline <- CodeBuild 및 CodeDeploy사용. CodeBuild에는 Dockerfile 사용
- IAM
  - 사용자 권한 설정 및 컴퓨터용 권한 설정에 유의

Utilities:
- AWS Cost Explorer
