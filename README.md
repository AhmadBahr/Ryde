# Ryde - Uber Clone

A modern ride-sharing mobile application built with React Native and Expo.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)

## ✨ Features

- 🚗 **Ride Booking** - Book rides with real-time driver matching
- 📍 **Live Location Tracking** - Real-time location with Google Maps integration
- 🔍 **Google Places Autocomplete** - Search any destination with autocomplete
- 💳 **Stripe Payment Integration** - Secure payment processing
- 👤 **User Authentication** - Secure login with Clerk and Google OAuth
- 📱 **Cross-Platform** - Works on both Android and iOS
- 🎨 **Modern UI** - Built with NativeWind (Tailwind CSS for React Native)
- 📊 **Ride History** - View and manage your ride history
- 🗺️ **Interactive Maps** - Real-time driver locations and route visualization

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- Expo CLI
- Android Studio / Xcode (for device testing)
- PostgreSQL database

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd Ryde

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

### Environment Setup
Create a `.env` file with the following variables:
```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
EXPO_PUBLIC_PLACES_API_KEY=your_google_places_key
EXPO_PUBLIC_DIRECTIONS_API_KEY=your_google_directions_key
DATABASE_URL=your_postgresql_connection_string
EXPO_PUBLIC_SERVER_URL=your_server_url
EXPO_PUBLIC_GEOAPIFY_API_KEY=your_geoapify_key
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Running the Project
```bash
# Start the development server
npx expo start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

Download the [Expo Go](https://expo.dev/go) app and scan the QR code to view the project on your device.

## 🛠️ Tech Stack

**Frontend:**
- React Native 0.74.5
- Expo SDK 51
- TypeScript
- NativeWind (Tailwind CSS)
- React Navigation
- Zustand (State Management)

**Backend & Services:**
- NeonDB (PostgreSQL)
- Clerk Authentication
- Stripe Payments
- Google Maps API
- Geoapify API

**Development Tools:**
- ESLint + Prettier
- Jest Testing
- Expo Router

## 📁 Project Structure

```
Ryde/
├── app/                    # Expo Router app directory
│   ├── (api)/             # API routes
│   ├── (auth)/            # Authentication screens
│   ├── (root)/            # Main app screens
│   └── _layout.tsx        # Root layout
├── components/            # Reusable UI components
├── constants/             # App constants and assets
├── lib/                   # Utility functions
├── store/                 # Zustand state management
├── types/                 # TypeScript type definitions
└── assets/                # Images, fonts, and icons
```

## 🔧 Configuration

### Database Setup
The app uses NeonDB (PostgreSQL) for data storage. Set up your database with the following tables:

**Drivers Table:**
```sql
CREATE TABLE drivers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    profile_image_url TEXT,
    car_image_url TEXT,
    car_seats INTEGER NOT NULL CHECK (car_seats > 0),
    rating DECIMAL(3, 2) CHECK (rating >= 0 AND rating <= 5)
);
```

**Rides Table:**
```sql
CREATE TABLE rides (
    ride_id SERIAL PRIMARY KEY,
    origin_address VARCHAR(255) NOT NULL,
    destination_address VARCHAR(255) NOT NULL,
    origin_latitude DECIMAL(9, 6) NOT NULL,
    origin_longitude DECIMAL(9, 6) NOT NULL,
    destination_latitude DECIMAL(9, 6) NOT NULL,
    destination_longitude DECIMAL(9, 6) NOT NULL,
    ride_time INTEGER NOT NULL,
    fare_price DECIMAL(10, 2) NOT NULL CHECK (fare_price >= 0),
    payment_status VARCHAR(20) NOT NULL,
    driver_id INTEGER REFERENCES drivers(id),
    user_id VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### API Configuration
Update the API endpoints in the app directory to match your backend configuration.

## 📚 API Endpoints

**Authentication:**
- Clerk handles all authentication flows

**Rides:**
- `POST /api/ride/create` - Create a new ride
- `GET /api/ride/[id]` - Get user's ride history
- `POST /api/stripe/create` - Create Stripe payment intent
- `POST /api/stripe/pay` - Process payment

## 🚀 Deployment

**Mobile App:**
```bash
# Build for production
expo build:android
expo build:ios

# Or use EAS Build
eas build --platform all
```

**Database:**
- Deploy to NeonDB or any PostgreSQL provider
- Update environment variables with production URLs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

**Built with ❤️ using React Native and Expo**
