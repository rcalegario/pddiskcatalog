import React from 'react'
import { Link } from 'react-router-dom';

export default function DiskSummary({ disk }) {
  return (
    <div className="card z-depth-0 disk-sumaary">
      <div className="card-content">
        <Link to={`/disks/${disk.id}`}>
          <span className="card-title">{(disk && disk.title) || `Disk Title`}</span>
        </Link>
        <p>{(disk && disk.artist) || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}</p>
        <p className="grey-text">{(disk && disk.year) || 1993}</p>
      </div>
    </div>
  )
}
