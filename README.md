# AirSpace - Air Rights Trading Platform on Flow 🏗️

A revolutionary platform that transforms physical air rights into tradeable NFTs using Flow blockchain and zero-knowledge verification for privacy-preserving property details.

## 🌟 Features

### 🏘️ Real Estate Innovation
- **Air Rights Tokenization**: Transform air rights into NFTs on Flow blockchain
- **Property Visualization**: Interactive 3D property view with current and maximum height
- **Market Transparency**: Open marketplace for air rights trading

### 🔐 Privacy & Security
- **Zero-Knowledge Verification**: Verify property details without revealing sensitive information
- **Secure Authentication**: zkSync SSO with passkey integration
- **Verifiable Ownership**: Cryptographic proof of property ownership

### ⚡ Multi-Chain Integration
- **Seamless UX**: Unified interface across multiple blockchains

### 🚀 Advanced Technology

### Frontend & User Experience
- **Next.js**: React framework for the web application
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions
- **Mapbox**: Interactive maps for property visualization

## 🔄 Core Workflows

### Minting Air Rights NFTs

Property owners can tokenize their air rights by:

1. Creating a listing with property details
2. Generating a zero-knowledge proof of property details
3. Minting an NFT on the Flow blockchain

```bash
# Mint NFTs from JSON data
npm run mint-nfts
```

### Buying Air Rights

Developers and businesses can purchase air rights by:

1. Browsing available listings
2. Connecting their Flow wallet
3. Completing the purchase transaction

### Verifying Ownership

All air rights can be verified using:

1. Zero-knowledge proofs for privacy-preserving verification
2. On-chain verification of NFT ownership

```bash
# Export and verify NFTs
npm run export-nfts
```

## 📜 Smart Contracts

### AirSpaceNFT

The AirSpaceNFT contract defines the structure for air rights NFTs:

```cadence
pub resource NFT: NonFungibleToken.INFT, MetadataViews.Resolver {
    pub let id: UInt64
    pub let propertyAddress: String
    pub let currentHeight: UInt64
    pub let maximumHeight: UInt64
    pub let availableFloors: UInt64
    pub let price: UFix64
    pub let mintedAt: UFix64
    
    // ... implementation
}
```


## 📊 Data Format

Air rights NFTs use the following data format:

```json
{
  "tokenId": 2,
  "ipfsHash": "QmUhnjFEszhg6Qkk6hQYNQxKK1Ghhn6DRM26CjLXFv18RY",
  "metadata": {
    "title": "Niagara Falls Hotel View Rights",
    "name": "AirSpace - Niagara Falls Hotel View Rights",
    "description": "Secure the pristine view of Niagara Falls by purchasing air rights above the existing hotel structure.",
    "attributes": [
      {"trait_type": "Property Address", "value": "6650 Niagara Parkway, Niagara Falls, ON L2G 0L0"},
      {"trait_type": "Current Height", "value": 10},
      {"trait_type": "Maximum Height", "value": 25},
      {"trait_type": "Available Floors", "value": 15},
      {"trait_type": "Price", "value": 250000}
    ],
    "properties": {"coordinates": {"latitude": 43.0962, "longitude": -79.0377}}
  }
}
```

