# Disaster Mapper Mobile 🗺️

A mobile field reporting application for disaster risk management 
built using Laravel and NativePHP Air. This is a companion mobile 
app for the Disaster Mapper v3 web system used by LGU field workers 
in Sablayan, Occidental Mindoro.

## What this app does
- Field workers can file incident reports offline
- View affected barangays and households
- Track evacuation status in real time
- Sync data back to the main system when online

## Built With
- Laravel 11
- NativePHP Air 3.0.4
- Inertia.js + React
- Tailwind CSS 4
- SQLite (offline storage)

## Development Setup
```bash
composer install
npm install
php artisan native:install
php artisan serve --host=0.0.0.0 --port=8000
npm run dev
php artisan native:jump
```

## Testing
Tested using Bifrost Jump on Realme 9 Pro (Android 12)

## Developer
PHPTHINKY — Filipino freelance developer
Building government systems for LGUs in the Philippines 🇵🇭