# BBRRP : Blockchain Based Restaurant Reservation Platform

## Deployment

Our architecutre:
- Elastic Beanstalk <- 서버 구동 및 관리 (Load Balancing, ...)
  - 로드밸런싱 구성에서 health check 설정 추가
  - 환경 변수 설정에 유의
- S3 <- 스토리지 서버 및 배포 빌드 파일 serve (by EB)
  - 퍼블릭 설정에 유의
- RDS <- PostgreSQL database
  - 보안정책 설정에 유의 (EB, CodeBuild, ...) <- Elastic Beanstalk의 EC2 인스턴스에서 접근 가능하도록 권한 부여 필요
  - 퍼블릭 설정에 유의
- Code Pipeline <- CodeBuild 및 CodeDeploy사용. CodeBuild에는 `buildspec.yaml` 사용
- IAM
  - 사용자 권한 설정 및 컴퓨터용 권한 설정에 유의

Utilities:
- AWS Cost Explorer

Prisma Client:
Insert followings to `schema.prisma`
```prisma
generator client {
  provider = "prisma-client-js"
  output   = "node_modules/.prisma/client"
  binaryTargets = ["native", "rhel-openssl-1.0.x"]
}
```
