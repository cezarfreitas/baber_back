# BlankCanvas - Deployment Guide

This guide covers deploying your BlankCanvas application using Docker.

## Quick Start

### Development

```bash
# Start development server
pnpm dev
```

### Production with Docker

#### Basic Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build and run manually
docker build -t blankcanvas .
docker run -p 3000:3000 blankcanvas
```

#### Production with Nginx (Recommended)

```bash
# Use the production profile for nginx reverse proxy
docker-compose --profile production up -d
```

## Deployment Options

### 1. Simple Docker Deployment

```bash
# Build the image
docker build -t blankcanvas:latest .

# Run the container
docker run -d \
  --name blankcanvas-app \
  -p 8000:8000 \
  --restart unless-stopped \
  blankcanvas:latest
```

### 2. Docker Compose (Recommended)

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### 3. Production with Load Balancer

```bash
# Start with nginx reverse proxy
docker-compose --profile production up -d

# This includes:
# - App container on port 3000
# - Nginx reverse proxy on ports 80/443
# - Health checks and monitoring
```

## Environment Variables

Create a `.env` file for production:

```env
NODE_ENV=production
PORT=8000
```

## Health Monitoring

The application includes built-in health checks:

- **Application Health**: `GET /api/ping`
- **Docker Health Check**: Built into Dockerfile
- **Nginx Health**: `GET /health`

## SSL/HTTPS Setup

For production with HTTPS:

1. Update `nginx.conf` with your SSL certificates
2. Uncomment the SSL configuration lines
3. Place certificates in the container or mount them as volumes

```bash
# Mount SSL certificates
docker-compose up -d \
  -v /path/to/certs:/etc/ssl/certs:ro \
  -v /path/to/private:/etc/ssl/private:ro
```

## Scaling

Scale the application with Docker Compose:

```bash
# Scale to 3 app instances
docker-compose up -d --scale app=3
```

## Monitoring

Monitor your deployment:

```bash
# View container status
docker-compose ps

# View logs
docker-compose logs -f app

# Monitor resource usage
docker stats
```

## Deployment to Cloud Platforms

### AWS ECS/Fargate

```bash
# Tag and push to ECR
docker tag blankcanvas:latest your-account.dkr.ecr.region.amazonaws.com/blankcanvas:latest
docker push your-account.dkr.ecr.region.amazonaws.com/blankcanvas:latest
```

### Google Cloud Run

```bash
# Build and deploy
gcloud builds submit --tag gcr.io/your-project/blankcanvas
gcloud run deploy --image gcr.io/your-project/blankcanvas --platform managed
```

### Azure Container Instances

```bash
# Deploy to Azure
az container create \
  --resource-group myResourceGroup \
  --name blankcanvas \
  --image your-registry/blankcanvas:latest \
  --dns-name-label blankcanvas-unique
```

## Troubleshooting

### Common Issues

1. **Port conflicts**: Change port mapping in docker-compose.yml
2. **Build failures**: Check Docker daemon and permissions
3. **Health check failures**: Verify `/api/ping` endpoint is accessible

### Debug Commands

```bash
# Check container logs
docker-compose logs app

# Access container shell
docker-compose exec app sh

# Test health endpoint
curl http://localhost:8000/api/ping
```

## Security Considerations

- The app runs as non-root user
- Nginx provides rate limiting and security headers
- Health checks don't expose sensitive information
- Use environment variables for secrets (never commit them)

## Performance Optimization

- Multi-stage Docker build reduces image size
- Nginx serves as reverse proxy and load balancer
- Gzip compression enabled
- Static file caching configured
